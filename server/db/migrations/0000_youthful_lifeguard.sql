CREATE TABLE `comments` (
	`id` integer PRIMARY KEY NOT NULL,
	`author` text NOT NULL,
	`body` text NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `comments_author_unique` ON `comments` (`author`);