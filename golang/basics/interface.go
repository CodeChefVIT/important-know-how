package main

import (
	"fmt"
	"math"
)

type Shape interface {
	area() int
}

type Rect struct {
	width  int
	height int
}

type Circ struct {
	radius int
}

func (r Rect) area() int {
	return r.width * r.height
}

func (c Circ) area() int {
	return int(math.Pi * math.Pow(float64(c.radius), 2))
}

func main() {
	C := Circ{4}
	R := Rect{2, 3}

	fmt.Println(C.area())
	fmt.Println(R.area())
}
