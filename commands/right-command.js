const Command = require("./command");

class RightCommand extends Command {
  constructor(robot, map) {
    super(robot, map);
  }
  execute() {
    if (this.robot.isPlaced) {
      this.robot.right();
    }
  }
}

module.exports = RightCommand;
