class Logger {
  private logHistory: string[] = [];

  log(message: string) {
    console.log(message);
    this.logHistory.push(message);
  }

  getHistory(): string[] {
    return this.logHistory;
  }
}

const logger = new Logger();
logger.log("İlk log.");
logger.log("İkinci log.");

console.log(logger.getHistory());

