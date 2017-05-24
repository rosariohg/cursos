//: Playground - noun: a place where people can play

import UIKit

var weekDays = [Int: String]()
weekDays[0] = "Monday"
weekDays[0] = "Lunes"
weekDays = [:]

var jobs = ["Carolina":"Doctor", "Luis":"Developer"]
jobs["Roberto"] = "Rocker"
jobs.count
jobs.isEmpty

jobs.updateValue("Singer", forKey: "Roberto")
jobs.updateValue("Licenciado", forKey: "Pablo")
jobs["Pablo"]

jobs["Pablo"] = nil
jobs
jobs.removeValue(forKey: "Roberto")

jobs

for (name, job) in jobs{
    name
    job
}
var allNames = ""
for name in jobs.keys{
    allNames.append(name)
}

allNames
var allJobs = ""

for job in jobs.values{
        allJobs.append(job)
}

allJobs

var orderedJobs = [String](jobs.values)
orderedJobs.sorted()

