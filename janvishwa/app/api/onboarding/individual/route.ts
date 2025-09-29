import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const data = await request.json()

    // Check if user already exists by clerkUserId or email
    let user = await prisma.user.findFirst({
      where: {
        OR: [
          { clerkUserId: data.clerkUserId },
          { email: data.email }
        ]
      },
      include: {
        individualProfile: true
      }
    })

    if (!user) {
      // Create new individual user
      user = await prisma.user.create({
        data: {
          clerkUserId: data.clerkUserId,
          email: data.email,
          firstName: data.firstName,
          lastName: data.lastName,
          phone: data.phone || null,
          userType: 'INDIVIDUAL',
          individualProfile: {
            create: {
              address: data.address || null,
              city: data.city || null,
              state: data.state || null,
              pincode: data.pincode || null,
              skills: data.skills || [],
              interests: data.interests || []
            }
          }
        },
        include: {
          individualProfile: true
        }
      })
    } else {
      // User exists - update user info
      user = await prisma.user.update({
        where: { id: user.id },
        data: {
          firstName: data.firstName,
          lastName: data.lastName,
          phone: data.phone || null,
          userType: 'INDIVIDUAL', // Ensure userType is set
          individualProfile: user.individualProfile
            ? {
                // Profile exists - update it
                update: {
                  address: data.address || null,
                  city: data.city || null,
                  state: data.state || null,
                  pincode: data.pincode || null,
                  skills: data.skills || [],
                  interests: data.interests || []
                }
              }
            : {
                // Profile doesn't exist - create it
                create: {
                  address: data.address || null,
                  city: data.city || null,
                  state: data.state || null,
                  pincode: data.pincode || null,
                  skills: data.skills || [],
                  interests: data.interests || []
                }
              }
        },
        include: {
          individualProfile: true
        }
      })
    }

    return NextResponse.json({ success: true, user })
  } catch (error) {
    console.error('Error creating/updating user:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to create or update user', details: error instanceof Error ? error.message : 'Unknown error' }, 
      { status: 500 }
    )
  }
}