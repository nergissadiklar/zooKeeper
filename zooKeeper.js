console.log("I love animals!");
console.log("Let's check on the animals...");
console.log("The deer looks fine.");
console.log("The bat looks happy.");
console.log("The lion looks healthy.");

animal = `
Switching on the camera in the camel habitat...
 ___.-''''-.
/___  @    |
',,,,.     |         _.'''''''._
     '     |        /           \\
     |     \\    _.-'             \\
     |      '.-'                  '-.
     |                               ',
     |                                '',
      ',,-,                           ':;
           ',,| ;,,                 ,' ;;
              ! ; !'',,,',',,,,'!  ;   ;:
             : ;  ! !       ! ! ;  ;   :;
             ; ;   ! !      ! !  ; ;   ;,
            ; ;    ! !     ! !   ; ;     
            ; ;    ! !    ! !     ; ;
           ;,,      !,!   !,!     ;,;
           /_I      L_I   L_I     /_I
Look at that! Our little camel is sunbathing!`
console.log(animal);
answer = input("Which habitat # do you need?");
animal= [camel,lion,deer,goose,bat,rabbit]
console.log(animal[answer]);
console.log(`---
You've reached the end of the program. To check another habitat, please restart the watcher.`)
