import { expect, test } from "bun:test"
import { pcb_board } from "../src/pcb/pcb_board"

test("pcb_board accepts per-side finish and assembly fields", () => {
  const board = pcb_board.parse({
    type: "pcb_board",
    center: { x: 0, y: 0 },
    top_solder_mask_color: "red",
    bottom_solder_mask_color: "blue",
    top_silkscreen_color: "white",
    bottom_silkscreen_color: "yellow",
    double_sided_assembly: true,
  })

  expect(board.top_solder_mask_color).toBe("red")
  expect(board.bottom_solder_mask_color).toBe("blue")
  expect(board.top_silkscreen_color).toBe("white")
  expect(board.bottom_silkscreen_color).toBe("yellow")
  expect(board.double_sided_assembly).toBe(true)
})
