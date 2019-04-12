#include <iostream>
//#include "TrieSkeleton.h"
#include <fstream>
#include <string.h>
using namespace std;

#define dictionary "./large"

unsigned int size_of_dict = 0;


//To load the dictionary into memory
bool Trie :: load(){

    char c;

    //initialize file pointer
     ifstream fin(dictionary);

    try{

       if(!fin)
            throw "ERROR in loading file";
    }


    catch(char *err){

        cout<<err;
        return false;
        fin.close();
    }




    Trie *temp = root;

    fin>>noskipws;  //to prevent skipping spaces and newline chars in text file

    while(fin>>c)
    {



        //If root points to a null node
        if(temp == NULL)
        {
            Trie *node = new Trie;
            root = node;
            temp = root;
        }






        //if c ranges from a to z, have its pointer index be 0 to 25 respectively
        if(isalpha(c)){

            if(temp->array[c-'a'] == NULL){

                Trie *node = new Trie;             //Allocate space for new node
                temp->array[c-'a'] = node;         //Have the pointer corresponding to c-th index point to node
                temp = node;                       // now put temp = newnode
            }

            else
                temp = temp->array[c-'a'];

        }






        //if c is ' then have its pointer index be 26
        else if(c=='\''){

            if(temp->array[maxsize-1] == NULL){

                Trie *node = new Trie;             //Allocate space for new node
                temp->array[maxsize-1] = node;         //Have the pointer corresponding to 26th index point to node
                temp = node;                       // now put temp = newnode
            }


            else
                temp = temp->array[maxsize-1];
        }






        //If a word has been fully loaded
        if(c=='\n'){

            temp->end = true;       //If a word has been loaded then put boolean true
            temp = root;            //Then start again from root
            size_of_dict++;
            continue;
        }


    }

    //close the file after loading it into the Trie
    fin.close();

    return true;
}










//To check if a word is correct or not
bool Trie :: check(char *word)
{
    char c;
    int l = strlen(word);
    Trie *temp = root;


    for(int i=0;i<l;i++)
    {
        c = word[i];


        //traverse the trie until the node corresponding to the last character
        if(isalpha(c)){
            temp = temp->array[c-'a'];
        }


        else if(c=='\''){
            temp = temp->array[maxsize-1];
        }


        //If trie ends while finding word return false
        if(temp == NULL)
            return false;

    }

        //If boolean corresponding to last character is false then return false
        if(temp->end == false)
            return false;

        return true;

}



bool Trie::unload(void)
{
    if(root!=NULL)
    {
        dell(root);
        return true;
    }
    return false;
}



void Trie :: dell(Trie* t)  //for freeing the trie using recursion
{
   // recursive case (go to end of trie), with a little help from stackoverflow
    for (int i = 0; i < maxsize; i++)
    {
        if (t->array[i] != NULL)
        {
            dell(t->array[i]);
        }
    }

    // base case
    delete(t);
}
