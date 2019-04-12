package main

import (
	"fmt"
	"math/rand"
)

func add(x float64, y float64) float64 {
	return x + y
}

func add_efficient(x, y float64) float64 {
	return x + y
}

func multiple(a, b string) (string, string) {
	return a, b
}

func main() {
	fmt.Println("A random number wbetween 0 and 100 is", rand.Intn(100))

	// type decided by RHS
	var x = 2.2
	var y = 3.3

	fmt.Println(add(x, y))

	// type given explicitly
	var a, b float64 = 2.2, 3.3

	fmt.Println(add_efficient(a, b))

	//type specified implicitly
	num1, num2 := 5.5, 5.5

	fmt.Println(add_efficient(num1, num2))

	e, r := multiple("hey", "there")
	fmt.Println(e, e, r)

	p := 10
	q := 2.2

	// typecasting
	c := float64(p) + q

	fmt.Println(c)

}
