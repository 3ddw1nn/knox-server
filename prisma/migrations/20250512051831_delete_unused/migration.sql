/*
  Warnings:

  - You are about to drop the column `companyName` on the `Employee` table. All the data in the column will be lost.
  - You are about to drop the column `billingAddress` on the `Vendor` table. All the data in the column will be lost.
  - You are about to drop the column `contactEmail` on the `Vendor` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "Vendor_contactEmail_key";

-- AlterTable
ALTER TABLE "Employee" DROP COLUMN "companyName";

-- AlterTable
ALTER TABLE "Software" ADD COLUMN     "description" TEXT;

-- AlterTable
ALTER TABLE "Vendor" DROP COLUMN "billingAddress",
DROP COLUMN "contactEmail",
ADD COLUMN     "role" "EmployeeRole" NOT NULL DEFAULT 'VENDOR';
