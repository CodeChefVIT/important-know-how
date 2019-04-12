package router

var GreetingHandler Hello

func Startup(greet string) {
	GreetingHandler.greeting = greet
	GreetingHandler.registerRoute()
}
