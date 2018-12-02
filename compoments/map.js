class Map {
  constructor(xAxis, yAxis) {
    this.xAxis = xAxis;
    this.yAxis = yAxis;
  }
  /**
   * Check whether the robot's current position is still within the boundary.
   * @param {Robot} robot
   */
  isPositionValid(robot) {
    return (
      robot.x >= 0 &&
      robot.x < this.xAxis &&
      robot.y >= 0 &&
      robot.y < this.yAxis
    );
  }
}

module.exports = Map;
