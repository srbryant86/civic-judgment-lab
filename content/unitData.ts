import type { ReconstructionUnit } from "./types";
import { reconstruction } from "./reconstruction";
import { civilWarCauses } from "./civilWarCauses";
import { civilRights } from "./civilRights";
import { coldWarMedia } from "./coldWarMedia";
import { americanGovernment } from "./americanGovernment";
import { medievalEurope } from "./medievalEurope";

/* Maps unit slug -> full authored content. All six units share the
   ReconstructionUnit schema, so features (print one-pagers, exports)
   can iterate over this registry. */
export const UNIT_DATA: Record<string, ReconstructionUnit> = {
  "reconstruction": reconstruction,
  "civil-war-causes": civilWarCauses,
  "civil-rights": civilRights,
  "cold-war-media": coldWarMedia,
  "american-government": americanGovernment,
  "medieval-europe": medievalEurope,
};

export function unitData(slug: string): ReconstructionUnit | undefined {
  return UNIT_DATA[slug];
}
