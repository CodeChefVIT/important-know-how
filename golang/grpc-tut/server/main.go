package main

import (
	"log"
	"net"

	"github.com/angadsharma1016/grpc-tut/api"
	"google.golang.org/grpc"
)

func main() {

	// set up a listener
	lis, err := net.Listen("tcp", ":7777")
	if err != nil {
		log.Fatalf("Error occurred setting up listener: %v", err)
	}

	// create server instance
	s := api.Server{}

	// create a grpc server object
	grpcServer := grpc.NewServer()

	// attach ping method
	api.RegisterPingServer(grpcServer, &s)

	if err = grpcServer.Serve(lis); err != nil {
		log.Fatalf("Error listening to grpc server: %v", err)
	}
}
