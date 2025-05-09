-- CreateEnum
CREATE TYPE "PricingModel" AS ENUM ('flat', 'per_use', 'monthly_subscription');

-- CreateEnum
CREATE TYPE "LicenseStatus" AS ENUM ('available', 'activated', 'canceled');

-- CreateEnum
CREATE TYPE "EmployeeRole" AS ENUM ('employee', 'admin');

-- CreateTable
CREATE TABLE "Vendor" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "contactEmail" TEXT NOT NULL,
    "billingAddress" TEXT,
    "createdAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(6) NOT NULL,

    CONSTRAINT "Vendor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Software" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "vendorId" TEXT NOT NULL,
    "pricingModel" "PricingModel" NOT NULL,
    "pricePerUse" DOUBLE PRECISION,
    "monthlyRate" DOUBLE PRECISION,
    "createdAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(6) NOT NULL,

    CONSTRAINT "Software_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LicenseKey" (
    "id" TEXT NOT NULL,
    "key" TEXT NOT NULL,
    "status" "LicenseStatus" NOT NULL DEFAULT 'available',
    "vendorId" TEXT NOT NULL,
    "softwareId" TEXT NOT NULL,
    "expiresAt" TIMESTAMP(6),
    "notes" TEXT,
    "createdAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(6) NOT NULL,
    "activatedAt" TIMESTAMP(6),
    "activatedById" TEXT,
    "canceledAt" TIMESTAMP(6),
    "canceledReason" TEXT,

    CONSTRAINT "LicenseKey_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Activation" (
    "id" TEXT NOT NULL,
    "licenseKeyId" TEXT NOT NULL,
    "activatedById" TEXT NOT NULL,
    "softwareId" TEXT NOT NULL,
    "vendorId" TEXT NOT NULL,
    "headsetSerialNumber" TEXT,
    "activatedAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Activation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Employee" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "role" "EmployeeRole" NOT NULL DEFAULT 'employee',
    "passwordHash" TEXT NOT NULL,
    "createdAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(6) NOT NULL,

    CONSTRAINT "Employee_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MonthlyUsage" (
    "id" TEXT NOT NULL,
    "vendorId" TEXT NOT NULL,
    "softwareId" TEXT NOT NULL,
    "month" DATE NOT NULL,
    "usageCount" INTEGER NOT NULL,
    "totalOwed" DOUBLE PRECISION NOT NULL,
    "calculatedAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "MonthlyUsage_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Vendor_createdAt_idx" ON "Vendor"("createdAt");

-- CreateIndex
CREATE INDEX "Software_vendorId_createdAt_id_idx" ON "Software"("vendorId", "createdAt", "id");

-- CreateIndex
CREATE UNIQUE INDEX "LicenseKey_key_key" ON "LicenseKey"("key");

-- CreateIndex
CREATE INDEX "LicenseKey_vendorId_softwareId_createdAt_id_idx" ON "LicenseKey"("vendorId", "softwareId", "createdAt", "id");

-- CreateIndex
CREATE INDEX "LicenseKey_activatedAt_idx" ON "LicenseKey"("activatedAt");

-- CreateIndex
CREATE UNIQUE INDEX "Activation_licenseKeyId_key" ON "Activation"("licenseKeyId");

-- CreateIndex
CREATE INDEX "Activation_vendorId_activatedAt_id_idx" ON "Activation"("vendorId", "activatedAt", "id");

-- CreateIndex
CREATE INDEX "Activation_createdAt_idx" ON "Activation"("createdAt");

-- CreateIndex
CREATE UNIQUE INDEX "Employee_email_key" ON "Employee"("email");

-- CreateIndex
CREATE INDEX "Employee_createdAt_idx" ON "Employee"("createdAt");

-- CreateIndex
CREATE INDEX "MonthlyUsage_vendorId_softwareId_month_idx" ON "MonthlyUsage"("vendorId", "softwareId", "month");

-- CreateIndex
CREATE UNIQUE INDEX "MonthlyUsage_vendorId_softwareId_month_key" ON "MonthlyUsage"("vendorId", "softwareId", "month");

-- AddForeignKey
ALTER TABLE "Software" ADD CONSTRAINT "Software_vendorId_fkey" FOREIGN KEY ("vendorId") REFERENCES "Vendor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LicenseKey" ADD CONSTRAINT "LicenseKey_vendorId_fkey" FOREIGN KEY ("vendorId") REFERENCES "Vendor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LicenseKey" ADD CONSTRAINT "LicenseKey_softwareId_fkey" FOREIGN KEY ("softwareId") REFERENCES "Software"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LicenseKey" ADD CONSTRAINT "LicenseKey_activatedById_fkey" FOREIGN KEY ("activatedById") REFERENCES "Employee"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Activation" ADD CONSTRAINT "Activation_licenseKeyId_fkey" FOREIGN KEY ("licenseKeyId") REFERENCES "LicenseKey"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Activation" ADD CONSTRAINT "Activation_activatedById_fkey" FOREIGN KEY ("activatedById") REFERENCES "Employee"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Activation" ADD CONSTRAINT "Activation_softwareId_fkey" FOREIGN KEY ("softwareId") REFERENCES "Software"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Activation" ADD CONSTRAINT "Activation_vendorId_fkey" FOREIGN KEY ("vendorId") REFERENCES "Vendor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MonthlyUsage" ADD CONSTRAINT "MonthlyUsage_vendorId_fkey" FOREIGN KEY ("vendorId") REFERENCES "Vendor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MonthlyUsage" ADD CONSTRAINT "MonthlyUsage_softwareId_fkey" FOREIGN KEY ("softwareId") REFERENCES "Software"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
