-- AlterTable
ALTER TABLE "order" ALTER COLUMN "status" SET DEFAULT false,
ALTER COLUMN "description" DROP NOT NULL;
