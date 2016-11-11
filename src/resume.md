---
layout: base.html
include:
  download: download
model: 
  experience: experience
  general: general
  personal: personal
---
<!-- About Section -->
<section id="about" class="section-content killPadBottom">
	<div class="container">
	</div>
</section>
<section class="about" class="section-content killPadBottom">      
	<div class="image-container col-md-6 col-sm-6 col-xs-12 pull-left">
		<img src="{{gravatar.justinhyland}}?s=400" />
	</div>
	<div class="container about-content">
		<div class="row">
			<div class="col-md-5 col-md-offset-7 col-sm-6 col-sm-offset-6 col-xs-12 clearfix">
				<div class="name-title">
					<h2>{{model.personal.name.first}} {{model.personal.name.last}}</h2>
	        		<h5>{{model.general.title}}</h5>
					<!-- Your Name & Designation-->
				</div>
				<div class="">
					<p class="lead">{{model.general.description}}</p>
					<p>{{model.general.summary}}</p>
					<!-- <img src="/assets/images/signature.png" alt="signature"/>
					YOUR SIGNATURE -->
				</div>
			</div>
		</div>
	</div>
</section>
<!-- End About Section -->
<!-- Resume Timeline Section -->
<section id="resume" class="section-content timeline-content">
	<div class="container">
		<!-- Section title -->
		<div class="section-title item_bottom text-center">
			<h1 class="uppercase">Resume</h1>
	    	<b class="v-line-md"></b>
		</div>
		<!-- End Section title -->
		<div class="row">
			<div class='col-md-5 col-sm-12'>
				<!-- Section Title -->
				<div class="alignRight">
					<h2 class="sub-heading uppercase">
						Work<br>
						<span class="hlite">Experience</span>
					</h2>
	       			<div class="separator-md right"></div>
					<h4 class="weight-300 font-alter text-light-dark">
						I have 10+year experience in this field. You can see here my work history. Lorem ipsum dolor sit amet consectetuer.
					</h4>
				</div>
				<!-- End Section Title -->
			</div>
			<div class='col-md-7 col-sm-12'>
				<ul class="timeline">
					{{#each model.experience}}
					<li {{#iftt @key 0}}class="open"{{/iftt}}>
						<div class="date">
							<span>{{this.beginDate}}</span>
							<span>{{this.endDate}}</span>
						</div>
						<div class="circle">
						</div>
						<div class="data">
							<h4 class="title">{{company}}</h4>
							<div class="content row">
								<div class="col-md-12">
									<h5>{{position}}</h5>
									<p>{{description}}</p>
									{{#if accomplishments.length}}
									<p>
										<ul class="accomplishments">
											{{#each accomplishments}}
												<li>{{this}}</li>
											{{/each}}
										</ul>
									</p>
									{{/if}}
									{{#if environment.length}}
									<p>
										<ul class="environment">
											{{#each environment}}
												<li>{{this}}</li>
											{{/each}}
										</ul>
									</p>
									{{/if}}
								</div>
							</div>
						</div>						
					</li>
					{{/each}}
				</ul>
			</div>
		</div>

		<hr class="bigMargin"/>
		<div class="row">
			<div class="col-md-12 text-center">
				<h2 class="sub-heading uppercase">
					Awards &amp; <span class="hlite">Publications</span>
				</h2>
	      		<div class="separator-md"></div>
				<h4 class="weight-300 font-alter text-light-dark">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed egestas dapibus lectus non dignissim.
				</h4>
			</div>
		</div>
		<div class="row new-line">
			<div class="col-md-12">
				<div class="col-md-6">
					<div class="award item_left">
						<div class="award-icon">
							<i class="fa fa-trophy icon-lg"></i>
						</div>
						<div class="award-content">
							<h4 class="title">Design Contest - 2012</h4>
							<p>
								Sed in porttitor dolor. Sed eleifend vulputate nulla, congue iaculis arcu mattis porta.
							</p>
							<strong>Published on August 21st 2012</strong>
						</div>
					</div>
				</div>
				<div class="col-md-6">
					<div class="award item_right">
						<div class="award-icon">
							<i class="fa fa-trophy icon-lg"></i>
						</div>
						<div class="award-content">
							<h4 class="title">Communication Arts - 2013</h4>
							<p>
								Sed in porttitor dolor. Sed eleifend vulputate nulla, congue iaculis arcu mattis porta.
							</p>
							<strong>Published on August 21st 2013</strong>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="row">
			<div class="col-md-12">
				<div class="col-md-6">
					<div class="award item_left">
						<div class="award-icon">
							<i class="fa fa-trophy icon-lg"></i>
						</div>
						<div class="award-content">
							<h4 class="title">London International</h4>
							<p>
								Sed in porttitor dolor. Sed eleifend vulputate nulla, congue iaculis arcu mattis porta.
							</p>
							<strong>Published on August 1st 2014</strong>
						</div>
					</div>
				</div>
				<div class="col-md-6">
					<div class="award item_right">
						<div class="award-icon">
							<i class="fa fa-book icon-lg"></i>
						</div>
						<div class="award-content">
							<h4 class="title">Graphic Design - 2014</h4>
							<p>
								Sed in porttitor dolor. Sed eleifend vulputate nulla, congue iaculis arcu mattis porta.
							</p>
							<strong>Published on July 23rd 2014</strong>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- DOWNLOAD CV-->
		<div class="row">
			<div class="col-md-12">
				<div class="callOut-box item_top">
					<div class="content">
						<h4 class="uppercase">
							Want to see my printable resume? Download now.
						</h4>
					</div>
					<div class="button">
						<a class="btn bt-default btn-fill"><i class="fa fa-cloud-download"></i> Download Resume</a>
					</div>
				</div>
				<div>
				</div>
				<!-- END DOWNLOAD CV-->
			</div>
		</div>
	</div>
</section>
<!-- End Resume Timeline Section -->
<!-- End Testimonial Section=============================================== -->
<!-- Skill Section -->
<section id="experience" class="section-content killPadBottom">
	<div class="container">
		<!-- Section title -->
		<div class="section-title item_bottom text-center">
			<h1 class="uppercase">Experience</h1>
	    	<b class="v-line-md"></b>
		</div>
		<!-- End Section title -->
		<div class="row">
			<div class='col-md-5 col-sm-12'>
				<!-- Section Title -->
				<div class="alignRight" id="skill-category-details">
					<h2 class="sub-heading uppercase">
						I Got The<br>
						<span class="hlite">Skills</span> & Expertise
					</h2>
	        		<div class="separator-md right"></div>
					<h4 class="weight-300 font-alter text-light-dark">
						I mostly work on websites, logos, print stuffs and UI design. You can see what I have done for my clients. Lorem ipsum dolor sit amet consectetuer.
					</h4>
					<h2 id="skill-category-title" class="sub-heading uppercase"></h2>
					<h4 id="skill-category-summary" class="weight-300 font-alter text-light-dark"></h4>
				</div>
				<!-- End Section Title -->
			</div>
			<div class='col-md-7 col-sm-12 skillArea'>
				<section class="l-skill-nav">
					<!-- Skill Category -->
					<nav class="slide-effect">
						<!-- Skill Group Category Buttons -->
					</nav>
					<!-- End Skill Category -->
				</section>
				<!-- SkillBar -->
				<div id="pie-container">
					<div id="l-inhalt">
						<!-- Skill Group Items -->
					</div>
				</div>
				<!-- End SkillBar -->
			</div>
		</div>
	</div>
</section>
<!-- End Skill Section -->
<!-- Contact Section -->
<section id="contact" class="section-content alterBg killPadBottom">
	<div class="container">
		<div class="row">
			<div class='col-md-5'>
				<!-- Section Title -->
				<div class="alignRight">
					<h2 class="sub-heading uppercase">If you have<br><span class="hlite">any question</span> ask me</h2>
	        <div class="separator-md right"></div>
					<h4 class="weight-300 font-alter text-light-dark">Want to say hello? Want to know more about us? Give us a call or drop us an email and we will get back to you as soon as we can.</h4>
				</div>
				<!-- End Section Title -->
			</div>
			<div class='col-md-4'>
				<div class="form-respond text-center">
				</div>
				<form method="post" name="contactform" id="contactform" class="validate" role="form" autocomplete="on">
					<div class="form-group">
						<input type="text" name="name" id="name" class="form-control input-lg required" placeholder="Your Name">
						<input type="email" name="email" id="email" class="form-control input-lg required email" placeholder="Your Email">
						<textarea name="message" id="message" class="form-control input-lg required" rows="9" placeholder="Your Message"></textarea>
					</div>
					<div class="form-group">
						<div class="text-right">
							<button type="submit" id="contactForm_submit" class="btn btn-dark btn-default btn-full btn-fill"><i class="fa fa-paper-plane-o"></i> Say Hello!</button>
						</div>
					</div>
					<!-- antispam code -->
	        <div class="antispam">
	          <input type="text" value="" name="url">
	        </div>
				</form>
			</div>
			<div class="col-md-3">
				<!-- Contact Details -->
				<ul class="contact-info">
					<li>
					<i class="fa fa-map-marker"></i>
					<span>
					<strong>John Doe</strong>
					<br>
					12 Segun Bagicha, <br>
					Dhaka, Bangladesh </span>
					</li>
					<li>
					<i class="fa fa-phone"></i>
					<span>
					<strong>Phone</strong>
					<br>
					+1 343 234 4343 <br>
					+9243 243 4243 </span>
					</li>
					<li>
					<i class="fa fa-skype"></i>
					<span>
					<strong>Skype</strong>
					<br>
					john.doe </span>
					</li>
					<li>
					<i class="fa fa-envelope"></i>
					<span>
					<strong>Email</strong>
					<br>
					<a href="mailto:">johndoe@example.com</a>
					</span>
					</li>
				</ul>
				<!-- End Contact Details -->
			</div>
		</div>
		<!-- End form contact -->
	</div>
</section>
<!-- End Contact Section -->