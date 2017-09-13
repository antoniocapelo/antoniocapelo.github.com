---
title: On Using Vim
layout: post
summary: My thoughts on starting to use vim as my primary Code Editor
image: "/img/vim.gif"
category: 
- coding
tags:
- vim
- vimtutor
- code editing
- coding
- antoniocapelo.com
---

I've always wanted to try out vim, but for some reasons (hard learning curve, thinking that's not adequate do frontend coding, fear of messing stuff up, etc) I never tried it.

I only worked with vim when I was logged on a remote machine and my knowledge was the following:

- **i** lets me write without messing stuff up and when I'm done I press **Esc** and then:
    - **:w** saves the changes
    - **:q** exits the damn thing

But after seeing [@andrewtjoslin](https://twitter.com/andrewtjoslin) rocking a ionic demo on [ng-europe](https://www.youtube.com/watch?v=ZjPRj2Vp74U) I thought 

> "Hey maybe this vim thing isn't meant only for devops/ninjas/guys-who-spend-their-day-on-a-terminal."

So I decided to give it a try, being motivated after talking to [@miguelcnf](https://twitter.com/miguelcnf) who pointed me to the awesome Derek Wyatt [videos](http://derekwyatt.org/vim/tutorials/) and this is my experience.

## Some Background

I mostly work on the frontend side of things, writing javascript (Vanilla, AngularJS, NodeJS, etc), HTML and CSS. I enjoy using the terminal for as many tasks as I can and I'm a *shortcut-junkie* ever since I remember.

I started using vim with some "caution" and for the first days I had a Sublime Text opened at the same time, in case I was in a rush and had to solve something quickly - after all, there's a steep learning curve.
However, I began to open ST less and less frequently and after a couple of months I switched completely and I'm using **vim** on both professional and personal projects, only touch the mouse when outside the editor and I'm a happier person (true story)!

# Vim Tips

## Modes

The cool thing about vim is that it's a modal editor. That means each key has a different meaning or effect depending on the current mode.
The main vim modes are:

- **Normal** - lets you move quickly, edit and delete text. This is the main mode where you'll feel like you're 'talking' with the editor, instead of just selecting and typing.
- **Insert** - the mode that a new user is used to, where each key basically acts as expected.
- **Visual** - for text selection (and all the cool things we can do with it)

Alternating between these modes is simple: **i** enters Insert mode, **v** enters Visual and **Esc** goes back to Normal mode. Normal mode is were you'll end up most of the times and where I feel most of the effectiveness come from.

## Moving

<img src="/img/vim-moving.gif">

Pretty simple. Moving on a per-character base is done with **h**, **j**, **k** and **l** (left, down, up, right), jumping between paragraphs is done with **{** / **}**, and **0** / **$** jump to the begining/end of line. 

Note: You'll notice that you rarely have to move your palms, which improves your speed, and reduce the error-rate on key pressing.

### Want more?

Jumping between sentences is done with **(** and **)**, **H** , **M**, and **L** take you to the top, middle  and bottom of the screen.
Then you have **gg** to go to the begining of the file, **G** to its end and navigating to line 50 is done with **50G**. 

## Selecting

<img src="/img/vim-selecting.gif">

When pressing **v** we enter Visual Mode, and as soon as we start to move with the **movement** keys we see the text being highlighted. After we hightlight text, we can act upon it (we'll see it later). 
We can also select on a per-line-basis, hitting **V** instead of **v**, or use the *visual block* mode (if you use Sublime Text, it's close to its [multiple cursors feature](https://www.sublimetext.com/docs/2/multiple_selection_with_the_keyboard.html)) by pressing **Ctrlv**.

## Getting Stuff Done
### Basic Commands

Let's get the *undo* (**u**) and *redo* (**Ctrlr**) out of the way, shall we?

In **vim**, *copy* === *yank* (**y**), *paste* === *put* (**p**) and *cut* === *delete* (**d**), easy right? One important - and useful - thing is that when deleting something in vim, it goes to vim's "clipboard".

Also, remember that most of vim commands have their Uppercase counterpart. **o** adds a new line bellow (and puts you in Insert Mode), and **O** adds the new line above.

> One important and useful thing is that when deleting something in vim, it goes to vim's "clipboard".

**vim** is very literal. **c** stands for **c**hange, so if you have some text selected and hit **c** it deletes the text and puts you in Insert Mode.**r** stands for **r**eplace so if you press **rf** it'll replace the current character for **f**. Think of **x** as a cross (for deleting characters, one by one). 

You can now combine stuff covered until now. Let's say we want to select all the file and delete the content: **ggdG**. Now you want to edit lines from 30 to 32: **30GV2jc**. Edit the word in front of the cursor (Change word) ? **cw**. Want to delete from the current position to the end of the line? **d$** - cool right?

### Motions

Motions let you customise a vim command, and they're applied during a timeframe after pressing a built-in command. So you'll do something like **\<command\>\<motion\>**.

Just imagine you want to change text from the current cursor position un**T**il the next occurrence of a dot: **ct.** (This really reads as *change until the next occurrence of .*). 

You can now combine **quantifiers**. In the example above, if you want to change until the 3rd occurrence of a dot, just add the quantity: **c3t.** - dope!

### Text-Objects

Text-Objects are like motions, but smarter. They let you specify if you want to perform the command inside (**i**) or around (**a**) the target. So if you want to change the **W**ord the cursor is above (without needing to position the cursor in front of the word), press **ciw** (Change Inside Word). Want to delete **A**round the current **S**entence? **das**. Text objects are very useful in frontend development. For example, you can **D**elete **I**nside the current HTML **T**ag, **dit**, or change inside the current function block, **ci{**.

>Text objects are very useful in frontend development. For example you can Delete Inside the current HTML Tag, **dit**, or change inside the current function block, **ci{**.

## More Stuff

There's a lot of more stuff around vim, more shortcuts, macros, a bunch of useful plugins and keybindings, the whole **.vimrc** file (which lets us setup our vim), and I plan to make a post to list my favourite plugins and show my **.vimrc** later.

However, here are a couple of nice extra tips:

- **/** lets you enter a search term (or regex), press enter to perform the search and **n**/**N** navigate through the results
- you can do that same search but backwards on the file, with **?** instead of **/**
- In insert mode, type the first couple of characters of a word, then press:
    - Ctrl-N to insert the next matching word; or
    - Ctrl-P to insert the previous matching word (almost forgot this one, thanks @miguelcnf)
- **\*** perform a search for the word bellow the cursor
- **=** reindents the current selected line(s)
- double-pressing a basic command acts on the current line - **cc** changes the whole line, **dd** deletes the line, etc
- **%** jumps to the matching parenthesis / brace / tag 
- using **Ctrlo** and **Ctrli** lets you navigate to the previous and next place you were looking at on the file;
- **\.** repeats the last operation (be it a deletion, insertion, putting, etc)
- **m** followed by a lettter creates a marker for the current line and **'** followed by that letter moves you to that marker

One more thing to note is that by working on a terminal we have a lot of stuff 'at hand', because we can run any terminal command from vim itself.
To execute a command directly from the editor, without needing to drop to a shell, we can use bang (!) followed by the command to be run.

## Resources and That's It

Besides the first links that I mentioned on the beging of this long post, I'll add some more resource that convinced/helped me in learning more of **vim** and to understand that this editor can be shaped to our needs, a dev doesn't need to know off the top of his head all of vim's commands/functions/etc, only the ones that will definitely make a difference on his day-to-day tasks.

Props to :

- [Comming Home to Vim](http://stevelosh.com/blog/2010/09/coming-home-to-vim/) by Steve Losh
- [Vim for people who think things like Vim are weird and hard](http://csswizardry.com/2014/06/vim-for-people-who-think-things-like-vim-are-weird-and-hard/) by Harry Roberts
- [Why I use Vim](https://pascalprecht.github.io/2014/03/18/why-i-use-vim/) by Pascal Precht

Hope you liked it and give this tool a try ;)

Cheers,
*A. Capelo*
