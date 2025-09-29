import { prisma } from './prisma'
import { UserType } from '@prisma/client'

// User creation utilities
export async function createUserProfile(clerkUserId: string, userType: UserType, userData: any) {
  return await prisma.user.create({
    data: {
      clerkUserId,
      userType,
      email: userData.email,
      firstName: userData.firstName,
      lastName: userData.lastName,
      ...(userType === 'INDIVIDUAL' && {
        individualProfile: {
          create: {
            address: userData.address,
            city: userData.city,
            state: userData.state,
            skills: userData.skills || [],
            interests: userData.interests || [],
          }
        }
      }),
    },
    include: {
      individualProfile: true,
      ngoProfile: true,
    }
  })
}

// NGO utilities
export async function createNgoProfile(userId: string, ngoData: any) {
  return await prisma.ngoProfile.create({
    data: {
      userId,
      organizationName: ngoData.organizationName,
      registrationNumber: ngoData.registrationNumber,
      causeCategories: ngoData.causeCategories,
      contactPerson: ngoData.contactPerson,
      contactEmail: ngoData.contactEmail,
      contactPhone: ngoData.contactPhone,
      address: ngoData.address,
      city: ngoData.city,
      state: ngoData.state,
      pincode: ngoData.pincode,
      description: ngoData.description,
    }
  })
}

// Get user with profile
export async function getUserWithProfile(clerkUserId: string) {
  return await prisma.user.findUnique({
    where: { clerkUserId },
    include: {
      individualProfile: true,
      ngoProfile: true,
    }
  })
}