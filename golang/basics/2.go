package main

import (
	"fmt"
	"math"
)

func fn() {
	fmt.Println("Hello world from another function")
}

func main() {
	fmt.Println("The square of 4 is", math.Pow(4, 2))
	fn()
}
