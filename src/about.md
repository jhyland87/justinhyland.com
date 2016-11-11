---
layout: base.html
model: 
  experience: experience
  general: general
  personal: personal
---

<!-- About Section -->
<section id="about" class="section-content killPadBottom">
	<div class="container">
		<div class="row">
			<!-- Section title -->
			<div class="section-title item_bottom text-center">
				<h1 class="uppercase">About Me</h1>
	      <b class="v-line-md"></b>
			</div>
			<!-- End Section title -->
		</div>
	</div>
</section>
<section class="about">      
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
					<p class="lead">
						{{model.general.description}}
					</p>
					<p>
						 {{model.general.summary}}
					</p>
					<!-- <img src="/assets/images/signature.png" alt="signature"/>
					YOUR SIGNATURE -->
				</div>
			</div>
		</div>
	</div>
</section>
<!-- End About Section -->
<!-- StatBoard & Social Container -->
<section class="statBoard">
	<div class="row no-margin-padding">
		<div class="col-sm-4 col-md-2 text-center pad-40 statBg">
			<div class="counter">
				<i class="fa fa-users icon-lg"></i>
				<strong>41</strong>
			</div>
			<h6>Clients</h6>
		</div>
		<div class="col-sm-4 col-md-2 text-center pad-40 alterBg">
			<div class="counter">
				<i class="fa fa-send icon-lg"></i>
				<strong>699</strong>
			</div>
			<h6>Projects</h6>
		</div>
		<div class="col-sm-4 col-md-2 text-center pad-40 statBg">
			<div class="counter">
				<i class="fa fa-trophy icon-lg"></i>
				<strong>19</strong>
			</div>
			<h6>Contest Won</h6>
		</div>
		<div class="col-sm-4 col-md-2 text-center pad-40 faceBook">
			<div class="social-icon-big">
				<a href="https://facebook.com/" target="_blank"><i class="fa fa-facebook"></i></a>
			</div>
			<h6>Facebook</h6>
		</div>
		<div class="col-sm-4 col-md-2 text-center pad-40 twitter">
			<div class="social-icon-big">
				<a href="https://plus.google.com/" target="_blank"><i class="fa fa-twitter"></i></a>
			</div>
			<h6>Twitter</h6>
		</div>
		<div class="col-sm-4 col-md-2 text-center pad-40 linkedin">
			<div class="social-icon-big">
				<a href="https://linkedin.com/" target="_blank"><i class="fa fa-linkedin"></i></a>
			</div>
			<h6>Linkedin</h6>
		</div>
	</div>
</section>
<!-- END StatBoard & Social Container -->
<!-- Skill Section -->
<section id="skill" class="section-content killPadBottom">
	<div class="container">
		<div class="row">
			<div class='col-md-5 col-sm-12'>
				<!-- Section Title -->
				<div class="alignRight" id="skill-category-details">
					<!--
					<h2 class="sub-heading uppercase">I Got The<br>
					<span class="hlite">Skills</span> & Expertise</h2>
	        <div class="separator-md right"></div>
					<h4 class="weight-300 font-alter text-light-dark">I mostly work on websites, logos, print stuffs and UI design. You can see what I have done for my clients. Lorem ipsum dolor sit amet consectetuer.</h4>
					-->
					<h2 id="skill-category-title" class="sub-heading uppercase"></h2>
					<h4 id="skill-category-summary" class="weight-300 font-alter text-light-dark"></h4>
				</div>
				<!-- End Section Title -->
			</div>
			<div class='col-md-7 col-sm-12 skillArea'>
				<section class="l-skill-nav">
					<!-- Skill Category -->
					<nav class="slide-effect">
						<!--
						<a href="#" data-hover="Design" data-skill="design" class="btn-skills"><span>Design</span></a>
						<a href="#" data-hover="Code" data-skill="code" class="btn-skills l-rMargin-20"><span>Code</span></a>
						-->
					</nav>
					<!-- End Skill Category -->
				</section>
				<!-- SkillBar -->
				<div id="pie-container">
					<div id="l-inhalt">
						<!--
						<div id="skill-bar1" class="bar">
							<h5 class="skill-caption">&nbsp;</h5>
						</div>
						<div id="skill-bar2" class="bar bar2">
							<h5 class="skill-caption">&nbsp;</h5>
						</div>
						<div id="skill-bar3" class="bar bar3">
							<h5 class="skill-caption">&nbsp;</h5>
						</div>
						<div id="skill-bar4" class="bar bar4">
							<h5 class="skill-caption">&nbsp;</h5>
						</div>
						<div id="skill-bar5" class="bar bar5">
							<h5 class="skill-caption">&nbsp;</h5>
						</div>
						-->
					</div>
				</div>
				<!-- End SkillBar -->
			</div>
		</div>
	</div>
</section>
<!-- End Skill Section -->
<!-- Testimonial Section==================================================== -->
<section id="testimonial" class="parallax">
<div class="parallax-overlay killPadBottom">
	<div class="container">
		<div class="row text-center">
			<div class="col-lg-8 col-lg-offset-2 col-md-8 col-md-offset-2 col-sm-8 col-sm-offset-2 col-xs-10 col-xs-offset-1">
				<h3 class="icon-md text-white"><i class="fa fa-comments-o"></i></h3>
				<div class="testimonial item_fade_in">
					<!--First Slide-->
					<div class="swiper-slide">
						<quote class="small text-white">
						<sup class="fa fa-quote-left"></sup>He really care about making unique designs for their clients, and put in incredible effort to make the whole process a real pleasure.<sup class="fa fa-quote-right"></sup>
						<p class="author">
							 Jak Doe
						</p>
						<p class="company">
							 CEO <a href="#">@Intel</a>
						</p>
						</quote>
					</div>
					<!--Second Slide-->
					<div class="swiper-slide">
						<quote class="small text-white">
						<sup class="fa fa-quote-left"></sup>My website couldn't look better after working with the him on the redesign. Now my site and corporate branding is outstanding!<sup class="fa fa-quote-right"></sup>
						<p class="author">
							 John Doe
						</p>
						<p class="company">
							 Manager <a href="#">@Web Planet</a>
						</p>
						</quote>
					</div>
					<!--Third Slide-->
					<div class="swiper-slide">
						<quote class="small text-white">
						<sup class="fa fa-quote-left"></sup>I am incredibly happy with the increased traffic my site has received since working with you! He is the best at this job.<sup class="fa fa-quote-right"></sup>
						<p class="author">
							 Jane Doe
						</p>
						<p class="company">
							 Founder <a href="#">@Creative Agency</a>
						</p>
						</quote>
					</div>
				</div>
				<!--/ .testimonial-wrapper -->
			</div>
		</div>
		<!--/ .row -->
	</div>
  <!-- Client Section -->
  <div class="container-fluid">
	<div class="row new-line text-center transDarkBg">
		<div class="col-md-8 col-md-offset-2 carrousel-container item_fade_in">
			<div id="client_carrousel" class="owl-carousel owl-theme owl-loaded">
				<!-- Client Logos -->
				<img src="/assets/images/clients/1.png" alt="logo1">
				<img src="/assets/images/clients/2.png" alt="logo2">
				<img src="/assets/images/clients/3.png" alt="logo3">
				<img src="/assets/images/clients/4.png" alt="logo4">
				<img src="/assets/images/clients/5.png" alt="logo5">
				<img src="/assets/images/clients/6.png" alt="logo6">
				<img src="/assets/images/clients/7.png" alt="logo7">
				<img src="/assets/images/clients/8.png" alt="logo8">
				<img src="/assets/images/clients/9.png" alt="logo9">
				<img src="/assets/images/clients/10.png" alt="logo10">
				<!-- End Client Logos -->
			</div>
		</div>
	</div>
</div>
<!-- End Client Section -->
</div>
</section>
<!-- End Testimonial Section=============================================== -->