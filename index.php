<?php
if (isset($_POST['submit'])) {

  // Set the recipient email address
  $to = "fahimfaisal1998@gmail.com";

  // Set the email subject
  $subject = "Greetings from your website!";

  // Set the email message
  $message = "Name: " . $_POST['name'] . "<br>" .
    "Email: " . $_POST['email'] . "<br>" .
    "Message: " . $_POST['message'] . "<br>";

  // Set the email headers
  $headers = "From: fahimfaisal.net <mail@fahimfaisal.net>" . "\r\n" .
    "Reply-To: mail@fahimfaisal.net" . "\r\n" .
    "X-Mailer: PHP/" . phpversion();

  // Send the email
  mail($to, $subject, $message, $headers);
}
?>


<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
  <meta name="title" content="Fahim Faisal - Full Stack Developer" />
  <meta name="description" content="Portfolio Website of Fahim Faisal" />
  <meta name="keywords" content="Fahim Faisal, Fahim, Faisal, fahimfaisal1998@gmail.com, hi@fahimfaisal.net, AIUB, Developer, Frontend, Full Stack, Backend, fahim2204" />
  <meta name="robots" content="index, follow" />
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
  <meta name="language" content="English" />
  <meta name="revisit-after" content="2 days" />
  <meta name="author" content="Fahim Faisal" />
  <!--  Essential Social Meta Tags -->
  <meta property="og:title" content="Fahim Faisal" />
  <meta property="og:description" content="Portfolio Website of Fahim Faisal." />
  <meta property="og:image" content="/assets/imgs/FahimFaisal.webp" />
  <meta property="og:url" content="fahimfaisal.net" />
  <meta property="twitter:card" content="/assets/imgs/FahimFaisal.webp" />
  <meta property="og:site_name" content="Fahim Faisal" />
  <meta property="twitter:image:alt" content="Fahim Faisal" />
  <link rel="icon" type="image/x-icon" href="favicon.ico" />
  <title>Fahim Faisal</title>
  <!-- font icons -->
  <link rel="stylesheet" href="assets/vendors/themify-icons/css/themify-icons.css" />
  <!-- Bootstrap + JohnDoe main styles -->
  <link rel="stylesheet" href="assets/css/johndoe.css" />
</head>

<body data-spy="scroll" data-target=".navbar" data-offset="40" id="home">
  <header class="header">
    <div class="container">
      <ul class="social-icons pt-3">
        <li class="social-item">
          <a class="social-link text-light" href="https://facebook.com/fahim2204" target="_blank">
            <i class="ti-facebook" aria-hidden="true"></i>
          </a>
        </li>
        <li class="social-item">
          <a class="social-link text-light" href="https://www.linkedin.com/in/fahim2204" target="_blank">
            <i class="ti-linkedin" aria-hidden="true"></i>
          </a>
        </li>
        <li class="social-item">
          <a class="social-link text-light" href="mailto:mail@fahimfaisal.net">
            <i class="ti-email" aria-hidden="true"></i>
          </a>
        </li>
        <li class="social-item">
          <a class="social-link text-light" href="https://github.com/fahim2204" target="_blank">
            <i class="ti-github" aria-hidden="true"></i>
          </a>
        </li>
      </ul>
      <div class="header-content">
        <h4 class="header-subtitle">Hello, I am</h4>
        <h1 class="header-title">Fahim Faisal</h1>
        <h6 class="header-mono">Full Stack Developer</h6>
        <a href="https://go.fahimfaisal.net/cv" target="_blank" class="btn btn-primary btn-rounded">
          <i class="ti-book pr-2"></i>
          View Resume
        </a>
      </div>
    </div>
  </header>
  <nav class="navbar sticky-top navbar-expand-lg navbar-light bg-white" data-spy="affix" data-offset-top="510">
    <div class="container">
      <button class="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse mt-sm-20 navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <a href="#home" class="nav-link">Home</a>
          </li>
          <li class="nav-item">
            <a href="#about" class="nav-link">About</a>
          </li>
          <li class="nav-item">
            <a href="#resume" class="nav-link">Resume</a>
          </li>
        </ul>
        <ul class="navbar-nav brand">
          <img src="assets/imgs/FahimFaisal.webp" alt="" class="brand-img" />
          <li class="brand-txt">
            <h5 class="brand-title">Fahim Faisal</h5>
            <div class="brand-subtitle">Full Stack Developer</div>
          </li>
        </ul>
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <a href="#portfolio" class="nav-link">Portfolio</a>
          </li>
          <li class="nav-item last-item">
            <a href="#contact" class="nav-link">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <div class="container-fluid">
    <div id="about" class="row about-section pt-5">
      <div class="col-lg-4 about-card">
        <h3 class="font-weight-light">Who am I ?</h3>
        <span class="line mb-5"></span>
        <h5 class="mb-3">
          A Web/Software Developer Located In Our Lovely Earth
        </h5>
        <p class="mt-20" style="text-align: justify">
          I am Fahim Faisal from Bangladesh. I have completed my Undergraduate
          studies at American International University Bangladesh. Having in
          computer science background I have a lot of experience dealing with
          lots of programming languages like C, C++, JAVA, C#, Python, PHP,
          JavaScript, and Technologies like HTML, CSS, Bootstrap, MySQL, etc.
          I use ReactJS, NextJS as frontend and ExpressJS, ASP .Net as
          Backend. I am an Expert in Web Development and Windows-based
          application. You are welcomed to contact me for any Computer
          science-related task.
        </p>
        <a href="CV.pdf" class="btn btn-outline-danger">
          <i class="icon-down-circled2"></i>
          Download My CV
        </a>
      </div>
      <div class="col-lg-4 about-card">
        <h3 class="font-weight-light">Personal Info</h3>
        <span class="line mb-5"></span>
        <ul class="mt40 info list-unstyled">
          <li>
            <span>Email</span>
            : hi@fahimfaisal.net
          </li>
          <li>
            <span>Phone</span>
            : + (880) 1960-839343
          </li>
          <li>
            <span>Skype</span>
            : fahimfaisal1998
          </li>
          <li>
            <span>Address</span>
            : Dhaka, Bangladesh
          </li>
        </ul>
        <ul class="social-icons pt-3">
          <li class="social-item">
            <a class="social-link" href="https://facebook.com/fahim2204" target="_blank">
              <i class="ti-facebook" aria-hidden="true"></i>
            </a>
          </li>
          <li class="social-item">
            <a class="social-link" href="https://www.linkedin.com/in/fahim2204" target="_blank">
              <i class="ti-linkedin" aria-hidden="true"></i>
            </a>
          </li>
          <li class="social-item">
            <a class="social-link" href="https://github.com/fahim2204" target="_blank">
              <i class="ti-github" aria-hidden="true"></i>
            </a>
          </li>
        </ul>
      </div>
      <div class="col-lg-4 about-card">
        <h3 class="font-weight-light">My Expertise</h3>
        <span class="line mb-5"></span>
        <div class="row">
          <div class="col-1 text-danger pt-1">
            <i class="ti-world icon-lg"></i>
          </div>
          <div class="col-10 ml-auto mr-3">
            <h6>Web Development</h6>
            <p class="subtitle">Full Stack</p>
            <hr />
          </div>
        </div>
        <div class="row">
          <div class="col-1 text-danger pt-1">
            <i class="ti-mobile icon-lg"></i>
          </div>
          <div class="col-10 ml-auto mr-3">
            <h6>App Development</h6>
            <p class="subtitle">Flutter</p>
            <hr />
          </div>
        </div>
      </div>
    </div>
  </div>

  <!--Resume Section-->
  <section class="section" id="resume">
    <div class="container">
      <h2 class="mb-5">
        <span class="text-danger">My</span>
        Resume
      </h2>
      <div class="row">
        <div class="col-md-6 col-lg-4">
          <div class="card">
            <div class="card-header">
              <div class="mt-2">
                <h4>Expertise</h4>
                <span class="line"></span>
              </div>
            </div>
            <div class="card-body">
              <h6 class="title text-danger">SEP, 2022 - Present</h6>
              <p class="mb-1 font-weight-bold">Full Stack Developer</p>
              <p class="subtitle">
                <small>SF GROUP</small>
              </p>
              <hr />
              <h6 class="title text-danger">JAN, 2022 - AUG, 2022</h6>
              <p class="mb-1 font-weight-bold">Junior Software Engineer</p>
              <p class="subtitle">
                <small>Akij Food & Beverage Ltd.</small>
              </p>
            </div>
          </div>
          <div class="card">
            <div class="card-header">
              <div class="pull-left">
                <h4 class="mt-2">Languages</h4>
                <span class="line"></span>
              </div>
            </div>
            <div class="card-body pb-2">
              <h6>Bangla</h6>
              <div class="progress mb-3">
                <div class="progress-bar bg-danger" role="progressbar" style="width: 100%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
              <h6>English</h6>
              <div class="progress mb-3">
                <div class="progress-bar bg-danger" role="progressbar" style="width: 80%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-lg-4">
          <div class="card">
            <div class="card-header">
              <div class="mt-2">
                <h4>Education</h4>
                <span class="line"></span>
              </div>
            </div>
            <div class="card-body">
              <h6 class="title text-danger">2018 - 2022</h6>
              <p class="mb-1">BSc. (CSE)</p>
              <p class="subtitle">
                American International University- Bangladesh (AIUB)
                <br />
                CGPA: 3.95 out of 4.00
              </p>
              <hr />
              <h6 class="title text-danger">2015 - 2017</h6>
              <p class="mb-1">H.S.C.</p>
              <p class="subtitle">
                Agricultural University College, Mymensingh
                <br />
                GPA: 5.00 out of 5.00
              </p>
              <hr />
              <h6 class="title text-danger">2013 - 2015</h6>
              <p class="mb-1">S.S.C.</p>
              <p class="subtitle">
                Haluaghat Model High School
                <br />
                GPA: 5.00 out of 5.00
              </p>
            </div>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="card">
            <div class="card-header">
              <div class="pull-left">
                <h4 class="mt-2">Skills</h4>
                <span class="line"></span>
              </div>
            </div>
            <div class="card-body pb-2">
              <h6>ReactJS &amp; NextJS</h6>
              <div class="progress mb-3">
                <div class="progress-bar bg-danger" role="progressbar" style="width: 90%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
              <h6>HTML5 &amp; CSS3</h6>
              <div class="progress mb-3">
                <div class="progress-bar bg-danger" role="progressbar" style="width: 97%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
              <h6>Laravel</h6>
              <div class="progress mb-3">
                <div class="progress-bar bg-danger" role="progressbar" style="width: 70%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
              <h6>JavaScript</h6>
              <div class="progress mb-3">
                <div class="progress-bar bg-danger" role="progressbar" style="width: 85%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
              <h6>Bootstrap</h6>
              <div class="progress mb-3">
                <div class="progress-bar bg-danger" role="progressbar" style="width: 99%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
              <h6>Tailwind CSS</h6>
              <div class="progress mb-3">
                <div class="progress-bar bg-danger" role="progressbar" style="width: 85%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
              <h6>ASP .Net</h6>
              <div class="progress mb-3">
                <div class="progress-bar bg-danger" role="progressbar" style="width: 87%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
              <h6>PHP</h6>
              <div class="progress mb-3">
                <div class="progress-bar bg-danger" role="progressbar" style="width: 80%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
              <h6>My SQL</h6>
              <div class="progress mb-3">
                <div class="progress-bar bg-danger" role="progressbar" style="width: 93%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
              <h6>Mongo DB</h6>
              <div class="progress mb-3">
                <div class="progress-bar bg-danger" role="progressbar" style="width: 90%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- <section class="section" id="service">
      <div class="container">
        <h2 class="mb-5 pb-4">
          <span class="text-danger">My</span>
          Services
        </h2>
        <div class="row">
          <div class="col-md-4 col-sm-6">
            <div class="card mb-5">
              <div class="card-header has-icon">
                <i class="ti-vector text-danger" aria-hidden="true"></i>
              </div>
              <div class="card-body px-4 py-3">
                <h5 class="mb-3 card-title text-dark">Ullam</h5>
                <p class="subtitle">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam commodi provident,
                  dolores reiciendis enim pariatur error optio, tempora ex, nihil nesciunt! In
                  praesentium sunt commodi, unde ipsam ex veritatis laboriosam dolor asperiores
                  suscipit blanditiis, dignissimos quos nesciunt nulla aperiam officia.
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-4 col-sm-6">
            <div class="card mb-5">
              <div class="card-header has-icon">
                <i class="ti-write text-danger" aria-hidden="true"></i>
              </div>
              <div class="card-body px-4 py-3">
                <h5 class="mb-3 card-title text-dark">Asperiores</h5>
                <p class="subtitle">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam commodi provident,
                  dolores reiciendis enim pariatur error optio, tempora ex, nihil nesciunt! In
                  praesentium sunt commodi, unde ipsam ex veritatis laboriosam dolor asperiores
                  suscipit blanditiis, dignissimos quos nesciunt nulla aperiam officia.
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-4 col-sm-6">
            <div class="card mb-5">
              <div class="card-header has-icon">
                <i class="ti-package text-danger" aria-hidden="true"></i>
              </div>
              <div class="card-body px-4 py-3">
                <h5 class="mb-3 card-title text-dark">Tempora</h5>
                <p class="subtitle">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam commodi provident,
                  dolores reiciendis enim pariatur error optio, tempora ex, nihil nesciunt! In
                  praesentium sunt commodi, unde ipsam ex veritatis laboriosam dolor asperiores
                  suscipit blanditiis, dignissimos quos nesciunt nulla aperiam officia.
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-4 col-sm-6">
            <div class="card mb-5">
              <div class="card-header has-icon">
                <i class="ti-map-alt text-danger" aria-hidden="true"></i>
              </div>
              <div class="card-body px-4 py-3">
                <h5 class="mb-3 card-title text-dark">Provident</h5>
                <p class="subtitle">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam commodi provident,
                  dolores reiciendis enim pariatur error optio, tempora ex, nihil nesciunt! In
                  praesentium sunt commodi, unde ipsam ex veritatis laboriosam dolor asperiores
                  suscipit blanditiis, dignissimos quos nesciunt nulla aperiam officia.
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-4 col-sm-6">
            <div class="card mb-5">
              <div class="card-header has-icon">
                <i class="ti-bar-chart text-danger" aria-hidden="true"></i>
              </div>
              <div class="card-body px-4 py-3">
                <h5 class="mb-3 card-title text-dark">Consectetur</h5>
                <p class="subtitle">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam commodi provident,
                  dolores reiciendis enim pariatur error optio, tempora ex, nihil nesciunt! In
                  praesentium sunt commodi, unde ipsam ex veritatis laboriosam dolor asperiores
                  suscipit blanditiis, dignissimos quos nesciunt nulla aperiam officia.
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-4 col-sm-6">
            <div class="card mb-5">
              <div class="card-header has-icon">
                <i class="ti-support text-danger" aria-hidden="true"></i>
              </div>
              <div class="card-body px-4 py-3">
                <h5 class="mb-3 card-title text-dark">Veritatis</h5>
                <p class="subtitle">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam commodi provident,
                  dolores reiciendis enim pariatur error optio, tempora ex, nihil nesciunt! In
                  praesentium sunt commodi, unde ipsam ex veritatis laboriosam dolor asperiores
                  suscipit blanditiis, dignissimos quos nesciunt nulla aperiam officia.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section> -->

  <!-- Portfolio Section -->
  <section class="section bg-custom-gray" id="portfolio">
    <div class="container">
      <h1 class="mb-5">
        <span class="text-danger">My</span>
        Portfolio
      </h1>
      <div class="portfolio">
        <div class="filters">
          <a href="#" data-filter=".all" class="active">All</a>
          <a href="#" data-filter=".new">New</a>
          <a href="#" data-filter=".pc">PC</a>
          <a href="#" data-filter=".web">Web</a>
          <a href="#" data-filter=".game">game</a>
        </div>
        <div class="portfolio-container">
          <div class="col-md-6 col-lg-4 all new web">
            <div class="portfolio-item">
              <img src="assets/imgs/ampublication.webp" class="img-fluid" alt="ampublication" />
              <div class="content-holder">
                <a class="img-popup" href="https://ampublication.com"></a>
                <div class="text-holder">
                  <h6 class="title">Website</h6>
                  <p class="subtitle">AM-Publication</p>
                  <a href="https://ampublication.com" target="_blank" class="rounded-pill border py-1 px-3 text-white">
                    Visit
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-4 all web">
            <div class="portfolio-item">
              <img src="/assets/imgs/editpro.webp" class="img-fluid" alt="EditPro" />
              <div class="content-holder">
                <a class="img-popup" href="http://www.editpro.ai"></a>
                <div class="text-holder">
                  <h6 class="title">Website</h6>
                  <p class="subtitle">Edit Pro</p>
                  <a href="http://www.editpro.ai" target="_blank" class="rounded-pill border py-1 px-3 text-white">
                    Visit
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-4 all web new">
            <div class="portfolio-item">
              <img src="https://raw.githubusercontent.com/fahim2204/Facebook-Clone/master/images/JNOxLowhGf.png" class="img-fluid" alt="Facebook Clone" />
              <div class="content-holder">
                <a class="img-popup" href="https://facebook.fahimfaisal.net"></a>
                <div class="text-holder">
                  <h6 class="title">Website</h6>
                  <p class="subtitle">Facebook Homepage Clone</p>
                  <a href="https://facebook.fahimfaisal.net" target="_blank" class="rounded-pill border py-1 px-3 text-white">
                    Visit
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-4 all new web">
            <div class="portfolio-item">
              <img src="https://raw.githubusercontent.com/fahim2204/Instagram-Clone/master/images/SCDWtyeWkz.png" class="img-fluid" alt="Download free bootstrap 4 admin dashboard, free boootstrap 4 templates" />
              <div class="content-holder">
                <a class="img-popup" href="https://instagram.fahimfaisal.net"></a>
                <div class="text-holder">
                  <h6 class="title">Website</h6>
                  <p class="subtitle">Instagram Homepage Clone</p>
                  <a href="https://instagram.fahimfaisal.net" target="_blank" class="rounded-pill border py-1 px-3 text-white">
                    Visit
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-4 all web">
            <div class="portfolio-item">
              <img src="assets/imgs/cs.aiub.webp" class="img-fluid" alt="aiub" />
              <div class="content-holder">
                <a class="img-popup" href="https://cs.aiub.fahimfaisal.net"></a>
                <div class="text-holder">
                  <h6 class="title">Website</h6>
                  <p class="subtitle">Clone of AIUB CS depertment website</p>
                  <a href="https://cs.aiub.fahimfaisal.net" target="_blank" class="rounded-pill border py-1 px-3 text-white">
                    Visit
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-md-6 col-lg-4 all web">
            <div class="portfolio-item">
              <img src="/assets/imgs/mst.webp" class="img-fluid" alt="MST" />
              <div class="content-holder">
                <a class="img-popup" href="https://megastar.technology/"></a>
                <div class="text-holder">
                  <h6 class="title">Website</h6>
                  <p class="subtitle">MEGASTAR TECHNOLOGY</p>
                  <a href="https://megastar.technology/" target="_blank" class="rounded-pill border py-1 px-3 text-white">
                    Visit
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-md-6 col-lg-4 all web">
            <div class="portfolio-item">
              <img src="https://raw.githubusercontent.com/fahim2204/ABC-Shop-Management/main/Images/gui/ABC-Shop-Home%20Page.png" class="img-fluid" alt="ABC Shop" />
              <div class="content-holder">
                <a class="img-popup" href="https://abcshop.fahimfaisal.net"></a>
                <div class="text-holder">
                  <h6 class="title">Website</h6>
                  <p class="subtitle">ABC Shop Management</p>
                  <a href="https://abcshop.fahimfaisal.net" target="_blank" class="rounded-pill border py-1 px-3 text-white">
                    Visit
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-4 all pc">
            <div class="portfolio-item">
              <img src="https://raw.githubusercontent.com/fahim2204/Super-Shop-Management/master/image/ScreenShoot/2.jpg" class="img-fluid" alt="Super Shop" />
              <div class="content-holder">
                <a class="img-popup" href="https://github.fahimfaisal.net/Super-Shop-Management"></a>
                <div class="text-holder">
                  <h6 class="title">Windows App</h6>
                  <p class="subtitle">Super Shop Management</p>
                  <a href="https://github.fahimfaisal.net/Super-Shop-Management" target="_blank" class="rounded-pill border py-1 px-3 text-white">
                    Visit
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-4 all game">
            <div class="portfolio-item">
              <img src="https://raw.githubusercontent.com/fahim2204/DX-Ball/master/Images/Screenshot2.jpg" class="img-fluid" alt="DX Ball" />
              <div class="content-holder">
                <a class="img-popup" href="https://github.com/fahim2204/DX-Ball"></a>
                <div class="text-holder">
                  <h6 class="title">Windows Game</h6>
                  <p class="subtitle">DX-Ball</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-4 all game">
            <div class="portfolio-item">
              <img src="https://raw.githubusercontent.com/fahim2204/Jungle-Run/master/Assets/Images/Screenshot1.jpg" class="img-fluid" alt="Jungle-Run" />
              <div class="content-holder">
                <a class="img-popup" href="assets/imgs/advertising-4.jpg"></a>
                <div class="text-holder">
                  <h6 class="title">Android Game</h6>
                  <p class="subtitle">Jungle Run</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- End of portfolio section -->

  <section class="section bg-dark py-5">
    <div class="container text-center">
      <h2 class="text-light mb-5 font-weight-normal">
        I Am Available For Freelance
      </h2>
      <button class="btn bg-primary w-lg text-white">Hire me</button>
    </div>
  </section>

  <div class="section contact" id="contact">
    <div id="map" class="map"></div>
    <div class="container">
      <div class="row">
        <div class="col-lg-8">
          <div class="contact-form-card">
            <h4 class="contact-title">Send a message</h4>
            <form action="/mail.php" method="post">
              <div class="form-group">
                <input class="form-control" type="text" name="name" placeholder="Name *" required />
              </div>
              <div class="form-group">
                <input class="form-control" type="email" name="email" placeholder="Email *" required />
              </div>
              <div class="form-group">
                <textarea class="form-control" placeholder="Message *" rows="5" name="message" required></textarea>
              </div>
              <div class="form-group">
                <button type="submit" class="form-control btn btn-primary">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="contact-info-card">
            <h4 class="contact-title">Get in touch</h4>
            <div class="row mb-2">
              <div class="col-1 pt-1 mr-1">
                <i class="ti-mobile icon-md"></i>
              </div>
              <div class="col-10">
                <h6 class="d-inline">
                  Phone :
                  <br />
                  <span class="text-muted">+ (880) 1960-839343</span>
                </h6>
              </div>
            </div>
            <div class="row mb-2">
              <div class="col-1 pt-1 mr-1">
                <i class="ti-email icon-md"></i>
              </div>
              <div class="col-10">
                <h6 class="d-inline">
                  Email :
                  <br />
                  <span class="text-muted">fahimfaisal1998@gmail.com</span>
                  <br />
                  <span class="text-muted">hi@fahimfaisal.net</span>
                </h6>
              </div>
            </div>
            <ul class="social-icons pt-4">
              <li class="social-item">
                <a class="social-link text-dark" href="https://facebook.com/fahim2204">
                  <i class="ti-facebook" aria-hidden="true"></i>
                </a>
              </li>
              <li class="social-item">
                <a class="social-link text-dark" href="https://www.linkedin.com/in/fahim2204">
                  <i class="ti-linkedin" aria-hidden="true"></i>
                </a>
              </li>
              <li class="social-item">
                <a class="social-link text-dark" href="https://github.com/fahim2204">
                  <i class="ti-github" aria-hidden="true"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  <footer class="footer py-3">
    <div class="container">
      <p class="small mb-0 text-light">
        &copy;
        <script>
          document.write(new Date().getFullYear());
        </script>
        Developed
        <i class="ti-heart text-danger mx-1"></i>
        By
        <a href="https://github.com/fahim2204" target="_blank">
          <span class="text-danger" title="Full Stack Developer">Fahim Faisal</span>
        </a>
      </p>
    </div>
  </footer>

  <!-- core  -->
  <script src="assets/vendors/jquery/jquery-3.4.1.js"></script>
  <script src="assets/vendors/bootstrap/bootstrap.bundle.js"></script>

  <!-- bootstrap 3 affix -->
  <script src="assets/vendors/bootstrap/bootstrap.affix.js"></script>

  <!-- Isotope  -->
  <script src="assets/vendors/isotope/isotope.pkgd.js"></script>

  <!-- JohnDoe js -->
  <script src="assets/js/johndoe.js"></script>
</body>

</html>