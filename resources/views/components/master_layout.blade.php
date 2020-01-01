<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <!--begin::Page Vendors -->
    <link href="{{url('assets/bootstrap/css/bootstrap.min.css')}}" rel="stylesheet" type="text/css" />
    <script src="{{url('assets/bootstrap/js/jquery-3.4.1.min.js')}}"></script>
    <script src="{{url('assets/bootstrap/js/bootstrap.min.js')}}"></script>
    <!--end::Page Vendors -->
    <title>Document</title>
</head>
<body>
    @include('components.header')
    @yield('content')
    @include('components.footer')
</body>
</html>