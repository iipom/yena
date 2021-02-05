-- CreateTable
CREATE TABLE "Guild" (
    "id" VARCHAR(19) NOT NULL,
    "premium" BOOLEAN NOT NULL DEFAULT false,
    "prefix" VARCHAR(4) NOT NULL DEFAULT E'.',
    "left" BOOLEAN NOT NULL DEFAULT false,
    "mute_role" VARCHAR(19),
    "join_roles" VARCHAR(19)[],
    "welcome_channel" VARCHAR(19),
    "log_channel" VARCHAR(19),
    "welcome_message" TEXT
);

-- CreateIndex
CREATE UNIQUE INDEX "Guild.id_unique" ON "Guild"("id");
