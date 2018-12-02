const Command = require("./command");

class LeftCommand extends Command {
  constructor(robot, map) {
    super(robot, map);
  }
  execute() {
    if (this.robot.isPlaced) {
      this.robot.left();
    }
  }
}

module.exports = LeftCommand;
