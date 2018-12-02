class Command {
  /**
   * Command parent class
   * @param {Robot} robot
   * @param {Map} map
   */
  constructor(robot, map) {
    this.robot = robot;
    this.map = map;
  }
}

module.exports = Command;
