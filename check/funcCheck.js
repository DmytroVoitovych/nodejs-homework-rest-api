const funcCheck = (check) => {
    return async (req,res,next) => {
      try {
          await check(req, res, next);
      } catch (err) {
          next(err);
      }
    };
};

module.exports = funcCheck;