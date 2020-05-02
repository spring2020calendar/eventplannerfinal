<!doctype html>
<html>
<head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script> 
<script src="http://ajax.aspnetcdn.com/ajax/jquery.validate/1.11.1/jquery.validate.min.js"></script> 
<script src="singleevent.js"></script>
<script src="reoccurringevent.js"></script>
<meta charset="utf-8">
<title>New</title>
</head>
<!-- single event -->
<div class="containter">
	<div class="row">
	<h1>Single Event</h1><hr>
		Labels marked * are required<br><br>
	</div>
  <form action="" name="newics" method="post">
    <div class="row">
      <label>* Event Title</label><br>
      <input type="text" id="title" name="title"></input>
    </div>
    <div class="row">
      <label>* Location</label><br>
      <input type="text" id="location" name="location"></input>
    </div>
	<div class="row">
      <label>Description</label><br>
      <textarea type="text" id="description" name="description" rows="8"></textarea>
    </div>
	<div class="row">
      <label>* Start Date</label><br>
      <input type="date" id="dateAlpha" name="dateAlpha"></input>
    </div>
	<div class="row">
      <label>* End Date</label><br>
      <input type="date" id="dateOmega" name="dateOmega"></input>
    </div>
	<div class="row">
      <label>* Start Time</label><br>
      <input type="time" id="timeAlpha" name="timeAlpha"></input>
    </div>
	<div class="row">
      <label>* End Time</label><br>
      <input type="time" id="timeOmega" name="timeOmega"></input>
    </div>

    <button class="submit" type="submit" data-format="ical">Validate & Download</button><hr>
  </form>
</div>

<!-- reocurring event -->
<div class="containter">
	<div class="row">
	<h1>Reoccurring Event</h1><hr>
		Labels marked * are required<br><br>
	</div>
  <form action="" name="newicsr" method="post">
    <div class="row">
      <label>* Event Title</label>
      <input type="text" id="title" name="title"></input>
    </div>
    <div class="row">
      <label>* Location</label>
      <input type="text" id="location" name="location"></input>
    </div>
	<div class="row">
      <label>Description</label>
      <textarea type="text" id="description" name="description" rows="8"></textarea>
    </div>
	<div class="row">
      <label>* Start Date</label>
      <input type="date" id="dateAlpha" name="dateAlpha"></input>
    </div>
	<div class="row">
      <label>* End Date</label>
      <input type="date" id="dateOmega" name="dateOmega"></input>
    </div>
	<div class="row">
      <label>* Reoccuring: </label>
      <select id="reoccuring" name="reocurring" multiple="multiple">
            <option id="daily" name="daily" value="1">Daily</option>
            <option id="weekly" name="weekly" value="2">Weekly</option>
            <option id="monthly" name="monthly" value="3">Monthly</option>
        </select>
    </div>
	<div class="row">
      <label>* Start Time</label>
      <input type="time" id="timeAlpha" name="timeAlpha"></input>
    </div>
	<div class="row">
      <label>* End Time</label>
      <input type="time" id="timeOmega" name="timeOmega"></input>
    </div>

    <button class="submit" type="submit" data-format="ical">Validate & Download</button><hr>
  </form>
</div>
<body>
</body>
</html>
