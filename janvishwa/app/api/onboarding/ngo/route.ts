import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const data = await request.json()

    // Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: { clerkUserId: data.clerkUserId }
    })

    if (existingUser) {
      return NextResponse.json(
        { success: false, error: 'User already exists' }, 
        { status: 400 }
      )
    }

    // Create NGO user - matching your Prisma schema
    const user = await prisma.user.create({
      data: {
        clerkUserId: data.clerkUserId,
        email: data.email,
        firstName: data.firstName,
        lastName: data.lastName,
        phone: data.phone || null,
        userType: 'NGO',
        ngoProfile: {
          create: {
            organizationName: data.organizationName,
            registrationNumber: data.registrationNumber,
            taxId: data.taxId || null,
            causeCategories: data.causeCategories || [], // Changed from causeAreas
            description: data.description || null,
            website: data.website || null,
            contactPerson: data.contactPerson,
            contactEmail: data.contactEmail || data.email,
            contactPhone: data.contactPhone || data.phone,
            address: data.address,
            city: data.city,
            state: data.state,
            pincode: data.pincode,
            latitude: data.latitude || null,
            longitude: data.longitude || null,
            verificationStatus: 'PENDING'
          }
        }
      },
      include: {
        ngoProfile: true
      }
    })

    return NextResponse.json({ success: true, user })
  } catch (error) {
    console.error('Error creating NGO user:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to create NGO user' }, 
      { status: 500 }
    )
  }
}