export function twoFer(name, snack) {
    if (snack) {
      return "One " + snack + " for " + name + ", one " + snack + " for me.";
    }
    if (name) {
      return "One for " + name + ", one for me.";
    }
    return "One for you, one for me.";
  };