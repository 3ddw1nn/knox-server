/*
  Warnings:

  - A unique constraint covering the columns `[supabaseUserId]` on the table `Vendor` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[contactEmail]` on the table `Vendor` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Vendor" ADD COLUMN     "supabaseUserId" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "Vendor_supabaseUserId_key" ON "Vendor"("supabaseUserId");

-- CreateIndex
CREATE UNIQUE INDEX "Vendor_contactEmail_key" ON "Vendor"("contactEmail");

-- CreateIndex
CREATE INDEX "Vendor_supabaseUserId_idx" ON "Vendor"("supabaseUserId");
