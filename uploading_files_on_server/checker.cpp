#include <iostream>
#include <string.h>
#include <ctype.h>
#include <fstream>
#include "TrieSkeleton.h"
#include "TrieFunctions.cpp"
using namespace std;

unsigned int wrongWords = 0;

Trie *globalObject;

int main(int argc,char*argv[])
{

    //To get right amount of arguments
    if(argc!=2){
        cout<<"Usage: ./checker [filename]\n";
        return 1;
    }


    char *filename = argv[1];

    //open file
    ifstream fin(filename);

    //handle error if file not found
    if(!fin){
        cout<<"File not found\n";
        return 2;
    }

    char c;
    char *word = new char[100]; //Set a variable to store a word;
    unsigned int i=0;


    //load the Trie
    if(!globalObject->load()){
        cout<<"Error while loading trie\n";
        return 3;
    }




    fin>>noskipws;  //To prevent skipping spaces and newline chars in text file

    //go through the file
    while(!fin.eof())
    {


        fin>>c;

        //if word is finished check the word
        if(c=='\n' || c==' '){

            //if length of word is 0 then do not check
            if(strlen(word) && !globalObject->check(word)){

                cout<<"Wrong word: "<<word<<endl;
                wrongWords++;
            }

            delete(word);                    //free up space after a word is complete
            char *word = new char[100];     //reallocate memory for the word again
            i=0;
        }




        //if word isnt finished store the letters in word[i]
        else if(c!=' ' && c!='\n'){

            if(isalpha(c) || c=='\'')
                word[i]=c;

            i++;
        }




        //There is no word longer than 45 characters
        if(i>45){
            cout<<"Wrong word: "<<word<<endl;
            wrongWords++;
        }



    }

    fin.close();

    //TODO, To free up memory
    if(!globalObject->unload()){
        cout<<"Error while unloading trie\n";
        return 4;
    }

    cout<<"\nWords in the dictionary used: "<<size_of_dict<<endl;
    cout<<"Words misspelled in "<<filename<<": "<<wrongWords<<endl;

    return 0;
}
