package main

import (
	"fmt"
	"strconv"
)

func main() {

	str := "Hello, World."

	newInt, _ := strconv.ParseInt(str, 0, 64)

	fmt.Println(newInt)

}
