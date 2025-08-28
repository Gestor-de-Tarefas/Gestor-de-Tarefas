/*
  Warnings:

  - You are about to drop the `_TimeToUser` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `_TimeToUser` DROP FOREIGN KEY `_TimeToUser_A_fkey`;

-- DropForeignKey
ALTER TABLE `_TimeToUser` DROP FOREIGN KEY `_TimeToUser_B_fkey`;

-- DropTable
DROP TABLE `_TimeToUser`;

-- CreateTable
CREATE TABLE `UserTimes` (
    `id` VARCHAR(191) NOT NULL,
    `id_user` VARCHAR(191) NOT NULL,
    `id_time` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `UserTimes` ADD CONSTRAINT `UserTimes_id_user_fkey` FOREIGN KEY (`id_user`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `UserTimes` ADD CONSTRAINT `UserTimes_id_time_fkey` FOREIGN KEY (`id_time`) REFERENCES `Time`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
