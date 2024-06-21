-- CreateTable
CREATE TABLE "Web" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Web_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Startup" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "image" JSONB NOT NULL,
    "links" JSONB NOT NULL,
    "raise" DOUBLE PRECISION NOT NULL,
    "valuation" DOUBLE PRECISION NOT NULL,
    "investors" JSONB NOT NULL,
    "twitterScore" DOUBLE PRECISION NOT NULL,
    "webs" JSONB NOT NULL,
    "tier" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "actions" TEXT[],
    "estimated" INTEGER NOT NULL,
    "deadline" TIMESTAMP(3) NOT NULL,
    "content" TEXT NOT NULL,

    CONSTRAINT "Projects_pkey" PRIMARY KEY ("id")
);
