// pointers

package main

import "fmt"

func main() {
	x := 10
	a := &x
	fmt.Println(a)
	fmt.Println(*a)
}
