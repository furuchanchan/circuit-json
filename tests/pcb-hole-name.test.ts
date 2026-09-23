import { expect, test } from "bun:test"
import { any_circuit_element, pcb_hole } from "src"

test("pcb_hole preserves an optional name across all hole shapes", () => {
  const hole = pcb_hole.parse({
    type: "pcb_hole",
    hole_shape: "circle",
    hole_diameter: 3.2,
    x: "5mm",
    y: "2mm",
    name: "H1",
  })
  expect(hole.name).toBe("H1")
  expect(any_circuit_element.parse(hole)).toEqual(hole)
  expect(pcb_hole.parse({ ...hole, name: undefined }).name).toBeUndefined()
})
