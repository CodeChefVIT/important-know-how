package main

import "fmt"

func main() {

	// after main finishes the defer function will run
	defer f2()
	f1()
	safeDiv(5, 0)
	panicExample()
}

func f1() {
	fmt.Println(1)
}

func f2() {
	fmt.Println(2)
}

func safeDiv(n1, n2 int) int {
	defer func() {
		// recover() allows program to recover from the error without crashing the application
		fmt.Println(recover())
	}()

	solution := n1 / n2
	return solution
}

func panicExample() {
	defer func() {
		fmt.Println(recover())
	}()

	panic("PANIC")
}
