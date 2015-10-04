---
layout: post
category : general
group: blog
tags : [noPSD, continuous design, bootstrap, highcharts, joomla]
---
{% include JB/setup %}

Around 3 years ago my frustrations with designing mockups and wireframes came to a head. If I heard "what happens when I click this?" or "what css class is this element?" one more time, I was going to pop.

At the time I was considering embarking on my own custom UI framework for eBay as I (and everyone around me) grew tired of spitting out hundreds of hifi wireframes in Fireworks (which I still believe was/is the best for the job). The universe answered and Bootstrap v2 was released, which was exactly what I had in mind (thx @mdo & @fat). We migrated our massive codebase over to Bootstrap, began designing in the browser and never looked back.

### Buzzwords == Adoption
I was thrilled to see tweets surface containing "Continuous Design" and #noPSD. I first ran across a post about the [#noPSD hashtag](http://thoughtworks.github.io/p2/issue02/continuous-design/) and then ran across a [continuous design post](http://iqcontent.com/blog/2013/08/iq-talk-continuous-design-when-designers-met-developers/) that really resonated with me. Finally I'm finding folks that share my experience over the last few years.

### UI Frameworks like Bootstrap and Foundation are key
Continuous design would quickly hit a brick wall if you had to stop and write CSS for every unique UI element in the mockup. You need to have a UI library at your disposal. Bootstrap and Foundation are the most popular, but you could certain use any framework.

You will inevitably hit points where you have to extend your UI framework of choice. This is perfectly fine but each addition to the framework should be debated and scrutinized, as they will compound support. One of the benefits of using a popular UI framework is that if a common UI element is missing, they'll probably add it. Case in point: [List Groups](http://twbs.github.io/bootstrap/components/#list-group) and [Panels](http://twbs.github.io/bootstrap/components/#panels) in Bootstrap 3.

### Mockups are interactive and save dev time
When you design in the browser, you focus much more on UX than is possible in a flat design. You will also squash questions "like what happens when I click save?". Your reply (smuggly) becomes "click it".

Another huge value-add, is that a developer won't have to program complex interactions just to find out that the UX is poor. You will have already vetted those interactions in the design phase.

### CSS in development can be identical to production
I keep the LESS/CSS between dev and production synced, so any markup and classes used in a mockup will pop right over into production. No fuss, no muss.

### Developers (integrators) will love you
Because the CSS is synced, developers don't have to reverse-engineer or guess. Here's 2 scenarios: 1) hand over a psd or png to a developer and ask him/her to turn it into code, 2) hand over production-ready html markup that can be copied and pasted

Which one do you think an integrator will prefer? I'll let you guess.

### You need fewer designers
It's become relatively common for companies to employ 25-40 designers. That's bananas. Sure you need varied design backgrounds for things like print and web, but I'm positive you can shrink your web design team be half or more if you only employ designers that design in the browser. Sorry to report this my design comrades, but it's time to evolve or die.

### Data elements are a huge time suck to design

We use Highcharts (Highstock specifically), sparklines, and tablature data in our app. I can't even imagine having to design those elements in Photoshop, Illustrator or Fireworks. In the browser you just change variables in the api to alter the appearance and iterate on design.

### Then and Now
My first continuous design was actually the mockup administrator site for Joomla 3.0. While the overall design elements didn't veer far from default Bootstrap, I wanted to really focus on UX flows and experimenting with the status quo, and desigining in the browser gave me this freedom. I'd call the Joomla 3 effort more "wireframing in the browser". You can check my original "live" mocks here:

[<img src="{{ BASE_PATH }}/assets/images/nopsd/joomla.jpg" />](http://kyleledbetter.com/j3ux/admin/index.html)

At this stage I'd certainly call it designing, as you can contrast with a recent musing, this interactive Skype concept:

[<img src="{{ BASE_PATH }}/assets/images/nopsd/skype.jpg" />](http://kyleledbetter.com/skype/)

(make sure to click the Video call, Voice call, Files & Links)

### Rebutals, admissions and internal debates

Let's get these out of the way. In my debates with "pure" designers (that only design and don't develop) I hear a lot of similar potential issues. I say "potential" because they aren't issues the designer has actually faced:

#### It's not as fast
You haven't seen me develop mockups in markup :) Seriously though, when you have your UI framework in place and well-documented, a designer/developer can punch out markup as fast (or faster) as I designer can wireframe it. Have you ever tried to make a table in Photoshop? Yeesh.

#### There's still a place for whiteboard & sketches
Whiteboards and sketches are blazingly fast and cheap. When you're fortunate enough to be in the same room as your team, or if you "can't" design, as sketch on a whiteboard or a napkin can save tons of time VS trying to explain some incredibly abstract idea.

#### Better suited for GUI design?
I've been having an internal debate that continuous design is better suited for a web app over a website. In a web app once you nail the overall design, you're really just iterating on the combination of interal UI elements to develop flows. That being said, the overall design of the web app will probably also iterate. Here's an example of the evolution of the same web app in my work:

<img src="{{ BASE_PATH }}/assets/images/nopsd/evolution.jpg" />

(view my [dribbble project](http://dribbble.com/kyleledbetter/projects/101684-Analytics-Products) for the full evolution)

I've also designed a few landing pages completely in the browser and #noPSD, but since that's not my main focus these days, I can't come to more definitive conclusions.

### Back to you!
Are there more like me out there? Do you think I'm nuts?