/*
  Warnings:

  - A unique constraint covering the columns `[to,sequence]` on the table `EmailSchedule` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "EmailSchedule_to_sequence_key" ON "EmailSchedule"("to", "sequence");
