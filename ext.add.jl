n = 0
try
	for p in [
		#
		"ajjwvijx" => ".m4a",
		"m4a" => ".m4a",
		"qnxy" => ".m4a",
	]
		cd(p[1])
		for f in readdir()
			splitext(f)[2] in [".js", ".txt"] && continue
			splitext(f)[2] == p[2] && continue
			mv(f, f * p[2])
			global n += 1
		end
		cd("..")
	end
	@info "完成 > $n"
catch e
	@info "错误 > $n"
	@info e
end
readline()
