const Command = require("./command");

class ReportCommand extends Command {
  constructor(robot, map) {
    super(robot, map);
  }

  execute() {
    if (this.robot.isPlaced) {
      this.robot.report();
    }
  }
}

module.exports = ReportCommand;
