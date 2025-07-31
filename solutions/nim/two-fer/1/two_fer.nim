proc twoFer*(name = ""): string =
  var result = "One for "
  if name == "":
    result.add("you")
  else:
    result.add(name)
  result.add(", one for me.")
  return result
