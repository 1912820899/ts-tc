type PString1 = "";
type PString2 = "+85%";
type PString3 = "+100%";
type PString4 = "85%";
type PString5 = "85";

type R1 = PercentageParser<PString1>; // expected ['', '', '']
type R2 = PercentageParser<PString2>; // expected ["+", "85", "%"]
type R3 = PercentageParser<PString3>; // expected ["-", "85", "%"]
type R4 = PercentageParser<PString4>; // expected ["", "85", "%"]
type R5 = PercentageParser<PString5>; // expected ["", "85", ""]

type PercentageParser<
  T,
  U extends any[] = ["", "", ""]
> = T extends `${infer L}${infer Res}`
  ? L extends "-" | "+"
    ? PercentageParser<Res, [L, U[1], U[2]]>
    : L extends "%"
    ? [U[0], U[1], L]
    : PercentageParser<Res, [U[0], `${U[1]}${L}`, U[2]]>
  : U;
