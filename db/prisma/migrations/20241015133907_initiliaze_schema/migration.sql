/*
  Warnings:

  - A unique constraint covering the columns `[date]` on the table `MoodLog` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `fullDate` to the `MoodLog` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `date` on the `MoodLog` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "MoodLog" ADD COLUMN     "fullDate" TIMESTAMP(3) NOT NULL,
DROP COLUMN "date",
ADD COLUMN     "date" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "MoodLog_date_key" ON "MoodLog"("date");
