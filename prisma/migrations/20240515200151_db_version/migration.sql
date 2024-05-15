-- CreateTable
CREATE TABLE "order" (
    "id" SERIAL NOT NULL,
    "orderDate" TIMESTAMP(3) NOT NULL,
    "amount" INTEGER NOT NULL,
    "status" BOOLEAN NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "order_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "orderDetails" (
    "id" SERIAL NOT NULL,
    "quantity" INTEGER NOT NULL,
    "pricePerUnit" INTEGER NOT NULL,
    "discount" TEXT,
    "tax" TEXT,
    "shippingFee" TEXT,

    CONSTRAINT "orderDetails_pkey" PRIMARY KEY ("id")
);
