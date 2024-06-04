/*
  Warnings:

  - You are about to drop the `Note` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Note";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "EmailSchedule" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "to" TEXT NOT NULL,
    "sequence" INTEGER NOT NULL,
    "scheduledAt" DATETIME NOT NULL,
    "sent" BOOLEAN NOT NULL DEFAULT false
);
