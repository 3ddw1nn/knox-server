/*
  Warnings:

  - You are about to drop the column `passwordHash` on the `Employee` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[supabaseUserId]` on the table `Employee` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterEnum
ALTER TYPE "EmployeeRole" ADD VALUE 'vendor';

-- AlterTable
ALTER TABLE "Employee" DROP COLUMN "passwordHash",
ADD COLUMN     "companyName" TEXT,
ADD COLUMN     "supabaseUserId" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "Employee_supabaseUserId_key" ON "Employee"("supabaseUserId");

-- CreateIndex
CREATE INDEX "Employee_supabaseUserId_idx" ON "Employee"("supabaseUserId");
