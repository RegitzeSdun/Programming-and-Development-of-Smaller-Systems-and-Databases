
years_of_job_experience = 0
years_of_working = 0
unemployed = True
you_got_the_job = False

function apply_for_job(years_of_job_experience) {
    if (years_of_job_experience > 0) {
        console.log("you got the job!")
        unemployed = False
    } else {
        console.log("you need job experience!")
        unemployed = False
    }
}        

while (unemployed) {
    apply_for_job(years_of_job_experience)}
    

    