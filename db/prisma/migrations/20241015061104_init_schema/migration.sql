/*
  Warnings:

  - The primary key for the `MoodLog` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "MoodLog" DROP CONSTRAINT "MoodLog_pkey",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "MoodLog_pkey" PRIMARY KEY ("id");
