const Command = require("./command");

class MoveCommand extends Command {
  constructor(robot, map) {
    super(robot, map);
  }

  execute() {
    if (this.robot.isPlaced) {
      // check whether executing MOVE command will result in falling
      const tempRobot = Object.assign({}, this.robot);
      tempRobot.move = this.robot.move;
      tempRobot.move();

      if (this.map.isPositionValid(tempRobot)) {
        this.robot.move();
      }
    }
  }
}

module.exports = MoveCommand;
