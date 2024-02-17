/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `Hero` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `email` to the `Hero` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Hero" ADD COLUMN     "email" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Hero_email_key" ON "Hero"("email");
