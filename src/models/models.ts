export type Book = {
  title: string;
  author: string;
  originallyPublished: number;
  readingStatus: ReadingStatus;
};

export type UpdateBook = {
  id: number;
  title: string;
  author: string;
  originallyPublished: number;
  readingStatus: string;
};

enum ReadingStatus {
  done = "DONE",
  inProgress = "IN_PROGRESS",
  notStarted = "NOT_STARTED",
  paused = "PAUSED",
}
